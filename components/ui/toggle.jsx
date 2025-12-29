'use client'

import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover)]:size-4 [&_svg]:shrink-0 focus-visible,box-shadow] aria-invalid,
  {
    variants
      variant
        default,
        outline,
      },
      size
        default,
        sm,
        lg,
      },
    },
    defaultVariants
      variant,
      size,
    },
  },
)

function Toggle({
  className,
  variant,
  size,
  ...props
}) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
