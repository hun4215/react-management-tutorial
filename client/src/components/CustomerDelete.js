import React from 'react';

class CustomerDelete extends React.Component {

    constructor(props) {
        super(props);
        this.deleteCustomer = this.deleteCustomer.bind(this);  // 이 부분을 추가했습니다.
    }

    deleteCustomer(id) {
        const url = '/api/customers/' +id;
        fetch(url, {
            method: "DELETE"
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</button>
        )
    }
}

export default CustomerDelete;