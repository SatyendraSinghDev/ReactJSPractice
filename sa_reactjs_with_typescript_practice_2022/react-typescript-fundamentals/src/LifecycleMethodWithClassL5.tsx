import { Component } from "react";

export interface IProps {
    initialvalue: number;
}

export interface IState {
 count: number;
 hideComponent: boolean;
}

// yeh jo component yeh yeh props accept kargea or yahi state accept krega, iske ilawa kuch dinge to error throw kr dega yeh component
export class LifecycleMethodWithClassL5 extends Component<IProps, IState> {
    state: IState = {
        count: this.props.initialvalue,  // initial state, and assign props value
        hideComponent: false
    };

    // It will call only one time, and only when jab component just mount hoga
    componentDidMount() {
        console.log("componentDidMount called");
        this.setState({count: this.state.count+1});
    }

    //  React deprecate this
    componentWillReceiveProps() {
        console.log("componentWillReceiveProps called");
    }

    // isme hume prev state or prev props ati hai means unki value ati hai
    componentDidUpdate(prevProps: IProps, prevState: IState) {
        console.log("componentWillReceiveProps called", prevProps, prevState);
    }

    // component re-render ho ya nahi props ke changes per
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate called");
        // return true; // but not good practice to do this manually and directly return true or false
        // return false; // we need to handle this with prev state and props
        return true;
    }

    onClickButton = () => {
        this.setState({count: this.state.count+1, hideComponent: true});
    }

    render() {
        console.log("render called");
        return(
            <div>
                Count With class component: {this.state.count}
                <button onClick={this.onClickButton}>Increment Value</button>
                {!this.state.hideComponent && <Information />}
            </div>
        );
    }
}

export class Information extends Component {

    // cleanup phase
    componentWillUnmount() {
        console.log("componentWillUnmount called");
    }
    render() {
        return <div>Information of unmounted component</div>;
    }
}