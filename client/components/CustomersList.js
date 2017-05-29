import React from 'react'; // eslint-disable-line
import { gql, graphql } from 'react-apollo';
import { isUndefined } from 'underscore';

const CustomersList = ({ data: { allCustomers } }) => {
    console.log('data', allCustomers);
    if (isUndefined(allCustomers)) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ul>
                {allCustomers.map(customer =>
                    <li key={customer.id}>
                        <a href="#">{customer.fullName}</a>
                    </li>
                )}
            </ul>
        </div>
    );
};

const allCustomers = gql`
    query allCustomers {
        allCustomers {
            id
            fullName
        }
    }
`;

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allCustomers)(CustomersList);
