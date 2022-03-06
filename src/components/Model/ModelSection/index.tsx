import React, { ReactElement, useEffect, useRef } from 'react';
import useModel from '../useModel';
import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
}

const ModelSection: React.FC<Props> = ({
  modelName,
  overlayNode,
  children,
  ...props
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { registerModel } = useModel(modelName);

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({ modelName, overlayNode, sectionRef });
    }
  }, [sectionRef, registerModel, modelName, overlayNode]);

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  );
};

export default ModelSection;
