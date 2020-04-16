import app from 'flarum/app';
import LicenseSettingsModal from './components/LicenseSettingsModal';

app.initializers.add('clarkWinkelmann/post-license', () => {
    app.extensionSettings['clarkWinkelmann-post-license'] = () => app.modal.show(new LicenseSettingsModal());
});
