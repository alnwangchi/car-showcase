import { CarDetailType } from '@/types';
import React from 'react';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  car: CarDetailType;
}

const CarDetail: React.FC<Props> = ({ isOpen, closeModal, car }) => {
  return <div>CarDetail</div>;
};

export default CarDetail;
