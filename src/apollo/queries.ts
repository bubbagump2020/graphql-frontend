import {gql} from "@apollo/client";

// CURRENT DEVELOPMENT & PRODUCTION
export const SPELLS = gql`
    query GetSpells {
        spells {
            id
            name
            school
            cast_time
            components
            range
            target_or_area
            effect
            duration
            resist
            description
            rulebook
            classes
        }
    }
`;