import { createSelector } from 'reselect';

const getProfiles = (profileReducer) => profileReducer.profiles
const filterText = (profileReducer, filterText) => filterText

export const getProfilesState = createSelector(
    [getProfiles, filterText],
    (profile, filterText) => {
        return profile.filter((profile) => {
            return profile.name && (profile.name).toLowerCase().includes(filterText.toLowerCase())
                || profile.location && (profile.location).toLowerCase().includes(filterText.toLowerCase())
                || profile.email && (profile.email).toLowerCase().includes(filterText.toLowerCase())
        })
    }
)