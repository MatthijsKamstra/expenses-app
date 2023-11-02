import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { StorageLocalService } from 'src/app/services/storage-local.service';
import { StorageSessionService } from 'src/app/services/storage-session.service';
import { Api, IConstants } from 'src/app/shared/config/api';
import { Constants } from 'src/app/shared/constants/constants';
import { IEnvironment } from 'src/app/shared/interfaces/i-environment';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-settings-page',
	templateUrl: './settings-page.component.html',
	styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {
	title: string = 'Settings';
	configSettings: boolean = true;

	useEnvironment: IEnvironment = environment;
	constants!: IConstants;

	localStorageExpandTable: any;
	sessionStorageUser: any;
	sessionStorageToken: any;
	valueLocalStorageExpandTable: any;
	valueSessionStorageUser: any;
	valueSessionStorageToken: any;

	constructor(
		private localStorageService: StorageLocalService,
		private notificationService: NotificationService,
		private sessionService: StorageSessionService,
	) { }

	ngOnInit(): void {
		this.constants = Api.getUrl();
		// local storage
		this.localStorageExpandTable = Constants.LOCAL_STORAGE_EXPAND_TABLE;
		// session session
		this.sessionStorageUser = Constants.SESSION_STORAGE_USER;
		this.sessionStorageToken = Constants.SESSION_STORAGE_TOKEN;
		// values local storage
		this.valueLocalStorageExpandTable = this.localStorageService.getItem(Constants.LOCAL_STORAGE_EXPAND_TABLE);
		// value session session
		this.valueSessionStorageUser = this.sessionService.getItem(Constants.SESSION_STORAGE_USER);
		this.valueSessionStorageToken = this.sessionService.getItem(Constants.SESSION_STORAGE_TOKEN);
	}
}
