import {gql} from "@apollo/client";

// CURRENT PRODUCTION
// export const WS_SPELLS = gql`
//     query GetSpells{
//         wizardSpells {
//             WSS_ID
//             WSS_NAME
//             WSS_SCHOOL
//             WSS_LEVEL
//             WSS_CAST_TIME
//             WSS_COMPONENTS
//             WSS_RANGE
//             WSS_EFFECT
//             WSS_DURATION
//             WSS_SAVING_THROW
//             WSS_SPELL_RESIST
//             WSS_DESCRIPTION
//             RULEBOOK
//         }
//     }
// `;

// CURRENT DEVELOPMENT
export const SPELLS = gql`
    query GetSpells {
        spells {
            SPELL_ID
            SPELL_NAME
            SPELL_SCHOOL
            SPELL_LEVEL
            SPELL_CAST_TIME
            SPELL_COMPONENTS
            SPELL_RANGE
            SPELL_TARGET_OR_AREA
            SPELL_EFFECT
            SPELL_DURATION
            SPELL_SAVING_THROW
            SPELL_SPELL_RESIST
            SPELL_DESCRIPTION
            RULEBOOK
        }
    }
`;