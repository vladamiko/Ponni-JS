Tanya:

set calling and logic PopupAddGroupView:

	- change GroupController.js:
		change subscribeOpen()
		add subscribeAddGroup() (with unsub)

	- change PopupAddGroupView.js:
		change closeGroupBtn() (with unsub)
		
	- change Mediator.js:
		add unsub()

	- change index.html:
		add div id="modal-settings"
	
	- change App.js:
		add settingsController
		
	- change GroupListView.js:
		 change addListeners() (add settingBtn)

	- change groupListTpl.js

	- change SettingsController.js:
		add settings
 		add subscribeOpenPopup()
 		add subscribeClosePopup()

create and set calling and logic PopupSettingsView:

	- add PopupSettingsView.js:
		add directionList
		add modal
		add renderPopup()
		add setDirectionList () 
		add open()
		add generateData()
		add close()
		addListeners()

	- change main.js

	- change settingsPopupTpl.js

set logic of displaying after direction change:

	- change SettingsController.js
		add subscribeSelectDirection()
		
	- change PopupSettingsView.js:
		add reRenderPopup()
		change addListeners()

	- change directionListTpl.js:
		add selectedDirection

	- change settingsPopupTpl.js
		add selectedDirection

	- change main.js

	- change testData.js

switch tests/filters in settings popup:

	- change SettingsController.js:
		add settingList
 		add setting
		add mode
		add subscribeSelectFilter()
		add subscribeSelectTest()
		change subscribeOpenPopup()
		change subscribeSelectDirection() 

	- change settingsPopupTpl.js:
		add option "test or filter"

	- change PopupSettingsView.js:
		add currentDirection
		change renderPopup()
		change reRenderPopup()
		change addListeners()
		