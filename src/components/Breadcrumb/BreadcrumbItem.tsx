import styled from 'styled-components';
import Text from '../Text';
import Icon from '../Icon';

const BreadcrumbItemContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

interface BreadcrumbItemProps {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
  __TYPE?: string;
}

const BreadcrumbItem = ({
  children,
  href,
  active,
  __TYPE,
  ...props
}: BreadcrumbItemProps) => {
  return (
    <BreadcrumbItemContainer {...props}>
      <Anchor href={href}>
        <Text size={14} strong={active}>
          {children}
        </Text>
      </Anchor>
      {!active && <Icon name='chevron-right' size={22} strokeWidth={1} />}
    </BreadcrumbItemContainer>
  );
};

BreadcrumbItem.defaultProps = {
  __TYPE: 'Breadcrumb.Item',
};

BreadcrumbItem.propTypes = {
  __TYPE: 'Breadcrumb.Item',
};

export default BreadcrumbItem;
