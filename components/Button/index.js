import React from "react";
import PropTypes from "prop-types";
import {TouchableOpacity} from 'react-native';
import {FontAwesome} from '@exop/vector-icons';

function Button({iconName, onPress}) {
    return (
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome name={iconName} size="80" color="white" />
        </TouchableOpacity>
    )
}

Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

export default Button;


// isCounting: true | false,   // 현재 카운트중인지 아닌지
// counterDuration: 1500,      // 얼마나 카운트할건지
// elapsedTime: 0,             // 얼마나 지났는지