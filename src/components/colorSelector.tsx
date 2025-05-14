'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { IconCheck } from '@tabler/icons-react';
import { v4 as uuidv4 } from 'uuid';

type ColorProps = {
  colors: Array<String>;
};

export function ColorSelector({ colors }: ColorProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className='space-y-2'>
      <label className='text-sm font-medium'>Selecione uma cor:</label>
      <div className='mt-3 flex gap-4'>
        {colors.map((color) => (
          <button
            key={uuidv4()}
            onClick={() => setSelectedColor(color)}
            aria-label={`Selecionar ${color}`}
            className={clsx(
              `h-10 w-10 rounded-full transition-all focus:outline-none ${color}`,
              selectedColor === color
                ? 'border-black ring-2 ring-black ring-offset-2'
                : 'border-gray-300'
            )}
          >
            {color === selectedColor && <IconCheck className='m-auto' />}
          </button>
        ))}
      </div>
    </div>
  );
}
