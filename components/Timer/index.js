import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as tomatoActions} from '../../reducer';
import Timer from './presenter';

// store에서 state를 복사해서 컨테이너의 props에 붙여넣기
function mapStateToProps(state){
    const {isPlaying, elapsedTime, timerDuration} = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    };
}

// dispatch: action을 reducer로 보내는 function
function mapDispatchToProps(dispatch) {
    return {
        startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
        addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
    }
}

// connect mapStateToProps to Timer
export default connect(mapStateToProps, mapDispatchToProps)(Timer);