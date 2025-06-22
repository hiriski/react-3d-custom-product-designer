import React, {
  useState,
  useRef,
  DragEvent,
  ChangeEvent,
  Fragment,
  useEffect,
  MouseEvent,
  useMemo,
  useCallback,
} from 'react'

// components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { alpha } from '@mui/material'

// hooks
import { useDesign } from '@/hooks'

// framer motion
import { motion, AnimatePresence } from 'framer-motion'

// assets
import UploadIcon from '@/assets/icons/meteor-icons--upload.svg?react'
import CloseIcon from '@/assets/icons/iconamoon--close-bold.svg?react'
import GalleryIcon from '@/assets/icons/fluent-color--image-16.svg?react'
import TrashIcon from '@/assets/icons/tabler--trash.svg?react'

// color libs
import { red } from '@mui/material/colors'

// constants
import { TEXTURE_DEFAULT } from '@/constants/designer.constant'

interface ImageUploadProps {
  maxFiles?: number
  maxSizeInMB?: number
  acceptedFormats?: string[]
}

const cardVariants = {
  collapsed: {
    height: 45,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  expanded: {
    height: 310,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
}

const contentVariants = {
  collapsed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
  expanded: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
  },
}

const DesignerUploadImage: React.FC<ImageUploadProps> = ({
  maxSizeInMB = 10,
  acceptedFormats = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
}) => {
  const { visibleUploadImage, setVisibleUploadImage, imageUrl, setImageUrl } =
    useDesign()

  // const [images, setImages] = useState<ImageFile[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const [error, setError] = useState<string>('')

  // input ref
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validateFile = (file: File): string | null => {
    if (!acceptedFormats.includes(file.type)) {
      return `Invalid file type. Accepted formats: ${acceptedFormats.join(', ')}`
    }

    if (file.size > maxSizeInMB * 1024 * 1024) {
      return `File size exceeds ${maxSizeInMB}MB limit`
    }

    return null
  }

  const hasUploadedImage = useMemo(() => {
    return imageUrl !== TEXTURE_DEFAULT
  }, [imageUrl])

  const onRemoveImage = () => {
    // Revoke all object URLs
    setImageUrl(TEXTURE_DEFAULT)
    setError('')
  }

  const onClickButton = useCallback(() => {
    if (hasUploadedImage) {
      onRemoveImage()
    } else {
      setVisibleUploadImage(!visibleUploadImage)
    }
  }, [visibleUploadImage, onRemoveImage, hasUploadedImage])

  const processFiles = useCallback(
    (fileList: FileList) => {
      if (fileList?.[0]) {
        let validFile: File | null = null
        let errorMessage = ''

        const validationError = validateFile(fileList?.[0])
        if (validationError) {
          errorMessage = validationError
        }
        validFile = fileList?.[0]

        if (errorMessage) {
          setError(errorMessage)
          return
        }

        // Create image object url
        const _imageUrl = URL.createObjectURL(validFile)

        setImageUrl(_imageUrl)
        setError('')
        setVisibleUploadImage(false)
      }
    },
    [error, imageUrl]
  )

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      processFiles(files)
    }
  }

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      processFiles(files)
    }
    // Reset input value to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const onClickBrowse = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    fileInputRef?.current?.click?.()
  }

  useEffect(() => {
    if (!visibleUploadImage) {
      setError('')
    }
  }, [visibleUploadImage])

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}>
      <motion.div
        variants={cardVariants}
        initial='collapsed'
        animate={visibleUploadImage ? 'expanded' : 'collapsed'}
        onClick={onClickButton}
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{ scale: 0.95 }}
        style={{ outline: 'none' }}
      >
        <Box
          sx={theme => ({
            px: 2,
            gap: 2,
            py: 1.4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 12,
            listStyle: 'none',
            backgroundColor:
              visibleUploadImage || hasUploadedImage
                ? red[500]
                : alpha(theme.palette.background.paper, 0.85),
            cursor: 'pointer',

            mx: 'auto',
            transition: theme.transitions.create(['width', 'color'], {
              duration: 0.2,
            }),
            width: 190,
            ...(visibleUploadImage && { marginBottom: 1, width: 120 }),
          })}
        >
          <Stack
            direction='row'
            gap={1.2}
            sx={{ outline: 'none', border: 'none' }}
          >
            <Fragment>
              {hasUploadedImage && (
                <Box component={TrashIcon} sx={{ width: 20, height: 'auto' }} />
              )}
              {visibleUploadImage && (
                <Box component={CloseIcon} sx={{ width: 20, height: 'auto' }} />
              )}
              {!visibleUploadImage && !hasUploadedImage && (
                <Box
                  component={UploadIcon}
                  sx={{ width: 20, height: 'auto' }}
                />
              )}
            </Fragment>

            <Typography
              sx={{
                fontWeight: '700',
                fontSize: 14,
                ...((visibleUploadImage || hasUploadedImage) && {
                  color: 'white',
                }),
              }}
            >
              {hasUploadedImage
                ? 'Remove Image'
                : visibleUploadImage
                  ? 'Cancel'
                  : 'Upload Image'}
            </Typography>
          </Stack>
        </Box>
        <AnimatePresence>
          {visibleUploadImage && (
            <motion.div
              variants={contentVariants}
              initial='collapsed'
              animate='expanded'
              exit='collapsed'
              style={{ outline: 'none' }}
            >
              <Paper
                elevation={2}
                sx={{
                  border: 1,
                  borderColor: isDragOver ? 'primary.main' : 'transparent',
                  borderStyle: 'dashed',
                  borderRadius: 5,
                  p: 4,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  bgcolor: 'background.paper',
                  '&:hover': {
                    borderColor: 'primary.main',
                  },
                  ...(error && {
                    color: 'red',
                  }),
                }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={onClickBrowse}
              >
                <Box
                  component={GalleryIcon}
                  sx={{ width: 72, height: 'auto' }}
                />
                <Typography
                  variant='h6'
                  gutterBottom
                  sx={{ color: 'text.secondary', lineHeight: 1.45 }}
                >
                  {isDragOver ? (
                    'Drop image here'
                  ) : (
                    <span>
                      Click to upload <br />
                      or drag and drop here.
                    </span>
                  )}
                </Typography>
                {/* File constraints info */}
                <Box sx={{ mt: 2, height: 42 }}>
                  {error ? (
                    <Typography variant='caption' color='error'>
                      {error}
                    </Typography>
                  ) : (
                    <Fragment>
                      <Typography variant='caption' color='text.secondary'>
                        Max. File size {maxSizeInMB}MB
                      </Typography>
                      <br />
                      <Typography variant='caption' color='text.secondary'>
                        Supported: JPG, PNG, GIF, WebP
                      </Typography>
                    </Fragment>
                  )}
                </Box>
              </Paper>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type='file'
        accept={acceptedFormats.join(',')}
        multiple={false}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
        max={1}
      />
    </Box>
  )
}

export default DesignerUploadImage
