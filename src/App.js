//定义组件
import React from 'react'
import Clock from './components/Clock/Clock'
import ClockUser from './components/ClockUser/ClockUser'

class App extends React.Component {
    render() {
        return (
            <div>
                1秒刷新: <Clock/>
                1秒刷新: <Clock/>
                5秒刷新: <ClockUser/>
                5秒刷新: <ClockUser/>
            </div>
        );
    }
}

export default App;
