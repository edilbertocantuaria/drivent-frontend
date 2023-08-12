import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';

export default function GithubButton({ variant = 'contained', children, ...props }) {
  return (
    <GitHubButton variant={variant} {...props}>
      {children}
    </GitHubButton>
  );
}

const GitHubButton = styled(MuiButton)`
  margin-top: 8px !important;
  margin-bottom: 8px !important;
  `;

