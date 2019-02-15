import React, { Component } from 'React';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from "../Button";

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    time -= minutes * 60;
    let seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes}
                : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

class Timer extends Component {

    // 컴포넌트가 새로운 props를 얻을 때마다 불러온다
    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        if (!currentProps.isPlaying && currentProps.isPlaying) {
            // start the interval
            const timerInterval = setInterval(() => {
                // reducer 에서 실행
                currentProps.addSecond();
            }, 1000);
            // timerInterval을 state에 저장 -> 이후 timerInterval을 중단시키기 위해
            this.setState({
                timerInterval
            })
        } else if (currentProps.isPlaying && !currentProps.isPlaying) {
            // stop the interval
            clearInterval(this.state.timerInterval);
        }
    }

    render(){
        const {
            isPlaying,
            elapsedTime,
            timerDuration,
            startTimer,
            restartTimer
        } = this.props;
        return(
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text>{formatTime(timerDuration - elapsedTime)}</Text>
                </View>
                <View style={styles.lower}>
                    {
                        !isPlaying &&
                            <Button iconName="play-circle" onPress={startTimer}></Button>
                    }
                    {
                        isPlaying &&
                            <Button iconName="stop-circle" onPress={restartTimer}></Button>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CE0B24"
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "100"
    }
});

export default Timer;