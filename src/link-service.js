class LinkService {
    static getNavLinks() {
        // return [LINK_HOME, LINK_TEAMS ,LINK_RESULTS];
        return [
            {
                "name" : "Home",
                "url" : LINK_HOME
            },
            {
                "name" : "Teams",
                "url" : LINK_TEAMS
            },
            {
                "name" : "Results",
                "url" : LINK_RESULTS
            },

        ]
    }
}