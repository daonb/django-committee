var NAV_SUFFIX = '#nav-';
var DEFAULT_STATE = 'vote';

var States = {
    'member' : function (id, year) {
        var i = new BreadCrumb();
	    i.params = {};
        i.name = 'member';
        i.header = gettext('members');
        i.nav_id = NAV_SUFFIX + 'members';
        i.params = (typeof year == 'number')?{year: year}:{};
        if (typeof id == 'number') { i.id = id };
        i.one_liner = function (item) { return item.name };
        i.div_view = function (item) { 
            return [item.start_date, item.end_date].join('\t');
        };
	// clear the hasMore flag as we display all members on one page
        i.hasMore = false;
	return i;
    },
    'vote': function (id)  {
        var i = new BreadCrumb();
        i.name = 'vote';
        i.header = gettext('votes');
        if (typeof id == 'number') { i.id = id; };
        i.nav_id = NAV_SUFFIX + 'past-votes';
        i.one_liner = function (item) {
            var t = item.time.split(' ')[0];
            return [t, item.title].join("\t");
        };
        i.div_view = function (item) { 
            if ((item.summary === null)|(item.summary == '')){
                summary = "מצטערים! אין תקציר זמין לחוק זה";
            } else {
                summary = item.summary;
            };
            if (item.full_text_url === null) {
                link = "";            
            } else {    
                link = '<a href="' + item.full_text_url + '">קישור לחוק המלא</a>'
            };
            var t = item.time.split(' ')[1];
            return [t, summary, link].join('<br />');
        };

	i.updateList = function (data,cls) {
            if (typeof cls != 'undefined') { $(CONTENT).html(CurrentState.cls()) }; 
            $(CONTENT_LIST).append(data);
	};

	i.cls = function() {
		return '<ul id="item-list"></ul>' + BreadCrumb.prototype.cls();
	}
        return i;
    },
    'law-approve': function (id)  {
        var i = new BreadCrumb();
        i.name = 'law-approve';
        i.header = gettext('votes');
        if (typeof id == 'number') { i.id = id; };
        i.nav_id = NAV_SUFFIX + 'law-approve';
        i.one_liner = function (item) {
            var t = item.time.split(' ')[0];
            return [t, item.title].join("\t");
        };
        i.div_view = function (item) { 
            if ((item.summary === null)|(item.summary == '')){
                summary = "מצטערים! אין תקציר זמין לחוק זה";
            } else {
                summary = item.summary;
            };
            if (item.full_text_url === null) {
                link = "";            
            } else {    
                link = '<a href="' + item.full_text_url + '">קישור לחוק המלא</a>'
            };
            var t = item.time.split(' ')[1];
            return [t, summary, link].join('<br />');
        };

	i.updateList = function (data,cls) {
            if (typeof cls != 'undefined') { $(CONTENT).html(CurrentState.cls()) }; 
            $(CONTENT_LIST).append(data);
	};

	i.cls = function() {
		return '<ul id="item-list"></ul>' + BreadCrumb.prototype.cls();
	}
        return i;
    },

    'party': function (id)  {
        var i = new BreadCrumb();
        i.name = 'party';
        i.header = gettext('parties');
        i.nav_id = NAV_SUFFIX + 'parties';
        if (typeof id == 'number') { i.id = id };
        i.one_liner = function (item) {
            return item.name;
        };
        i.div_view = function (item) { 
            return [item.start_date, item.end_date].join('\t');
        };
        i.hasMore = false;
        return i;
    },

    'about': function (id)  {
        var i = new BreadCrumb();
        i.name = 'about';
        i.header = gettext('about');
        i.nav_id = NAV_SUFFIX + 'about';
        i.hasMore = false;
        i.getFeedUrl = function(i){
            return "/about-content/";
        };
        return i;
    }
};

