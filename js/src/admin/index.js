import app from 'flarum/app';
import LicenseSettingsModal from './components/LicenseSettingsModal';

app.initializers.add('wvbforum/post-license', () => {
    app.extensionSettings['wvbforum-post-license'] = () => app.modal.show(new LicenseSettingsModal());
});
