export default function plugin($, utils) {
	function <%= name %>(opts, arg) {
		// Do Something
	}

	utils.plugin($, '<%= name %>', <%= name %>, { 'a': 'arg1' }, {});
};

