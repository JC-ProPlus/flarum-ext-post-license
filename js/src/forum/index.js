import {extend} from 'flarum/extend';
import app from 'flarum/app';
import DiscussionComposer from 'flarum/components/DiscussionComposer';
import LicensePicker from './components/LicensePicker';
import ReplyComposer from 'flarum/components/ReplyComposer';
import CommentPost from 'flarum/components/CommentPost';
import EditPostComposer from 'flarum/components/EditPostComposer';
import LicenseMeta from './components/LicenseMeta';

function addLicenseField(ComposerComponent) {
    ComposerComponent.prototype.wvbforumPostLicense = null;

    extend(ComposerComponent.prototype, 'headerItems', function (items) {
        items.add('wvbforum-post-license', LicensePicker.component({
            license: this.wvbforumPostLicense,
            onchange: license => {
                this.wvbforumPostLicense = license;
            },
        }));
    });

    extend(ComposerComponent.prototype, 'data', function (data) {
        data.wvbforumPostLicense = this.wvbforumPostLicense;
    });
}

app.initializers.add('wvbforum/post-license', () => {
    addLicenseField(ReplyComposer);
    addLicenseField(EditPostComposer);
    addLicenseField(DiscussionComposer);

    extend(EditPostComposer.prototype, 'init', function () {
        this.wvbforumPostLicense = this.props.post.attribute('wvbforumPostLicense');
    });

    extend(CommentPost.prototype, 'headerItems', function (items) {
        const license = this.props.post.attribute('wvbforumPostLicense');

        if (license) {
            items.add('wvbforum-post-license', LicenseMeta.component({
                license,
            }));
        }
    });
});
