import React from 'react';
import Movie from '../components/Movie';

class Detail extends React.Component {
    componentDidMount() {
        console.log(this.props);
        const { location, history } = this.props;
        console.log(location.state);
        if( location.state === undefined) {
            history.push("/"); 
        }
    }
    render() {
        const { location } = this.props;
        if( location.state ){
            return (
                <section className="container">
                    <p>{location.state.rank} 위</p> 
                    <p>{location.state.title}</p> 
                    <p>{location.state.openDate}</p> 
                </section>
            );
        } else {
            return null;
        }
    }
}

export default Detail;