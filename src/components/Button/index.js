import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Button = ({
	title,
	onPress,
	primary,
	secondary,
	disabled,
	...props
}) => (
	<S.Button
		primary={primary}
		secondary={secondary}
		onPress={onPress}
		activeOpacity={0.8}
		disabled={disabled}
		{...props}
	>
		<S.Text primary={primary} secondary={secondary}>
			{title}
		</S.Text>
	</S.Button>
);

Button.propTypes = {
	title: PropTypes.string,
	onPress: PropTypes.any,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	disabled: PropTypes.bool,
};

Button.defaultProps = {
	title: '',
	onPress: () => { },
	primary: true,
	secondary: false,
	disabled: false,
};

export default Button;