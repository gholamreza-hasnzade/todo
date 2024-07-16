// * import tools
import  { FC } from 'react';
import styled from '@emotion/styled';

// * import interface
import { IFlex } from '@/components/atoms/flex/Flex.atom.interface';

// * import material
import { Box  as BoxMUI} from '@mui/material';

const SFlex = styled(BoxMUI)<IFlex>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  gap: ${({ gap }) => gap || '0'};
  height: ${({ height }) => `${height}` || 'unset'};
  width: ${({ width }) => `${width}` || 'unset'};
  background: ${({ background }) => background || 'transparent'};
  border-radius: ${({ borderRadius }) => `${borderRadius}px` || 'unset'};
`;
export const Flex: FC<IFlex> = ({ children, ...rest }) => {

  
  return <SFlex {...rest}>{children}</SFlex>;
};
