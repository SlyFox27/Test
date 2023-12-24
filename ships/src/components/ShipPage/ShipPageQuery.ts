import { gql } from "graphql-tag";

const ShipPageQuery = gql`
    {
        vehicles {
            title
            description
            icons {
                large
                medium
            }
            level
            type {
                name
                title
                icons {
                    default
                }
            }
            nation {
                name
                title
                color
                icons {
                    small
                    medium
                    large
                }
            }
        }
    }
`;

export default ShipPageQuery;
