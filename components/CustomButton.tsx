'use client';

import Image from 'next/image';
import { MouseEventHandler } from 'react';

interface Props {
  isDisabled?: boolean;
  btnType?: 'button' | 'submit';
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  onClick,
}: Props) => (
  <button
    disabled={isDisabled}
    type={btnType || 'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={onClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className='relative w-6 h-6'>
        <Image src={rightIcon} alt='arrow_left' fill className='object-contain' />
      </div>
    )}
  </button>
);

export default CustomButton;
