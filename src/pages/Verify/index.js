import React from 'preact';

class Verify extends React.Component {

    componentDidMount() {
        const id = this.props.matches.id;
        console.log(id);
        fetch('https://api.backpulse.io/admin/users/verify/' + id, {
            method: "POST"
        }).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Verify;