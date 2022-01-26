import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import SessionDropdown from 'flarum/forum/components/SessionDropdown';
import ItemList from 'flarum/common/utils/ItemList';
import LinkButton from 'flarum/common/components/LinkButton';

import type Mithril from 'mithril';

app.initializers.add('ianm/same-page-admin', () => {
  extend(SessionDropdown.prototype, 'items', function (items: ItemList<Mithril.Children>) {
    if (app.forum.attribute('adminUrl')) {
      items.replace(
        'administration',
        <LinkButton icon="fas fa-wrench" href={app.forum.attribute('adminUrl')} external={true}>
          {app.translator.trans('core.forum.header.admin_button')}
        </LinkButton>,
        0
      );
    }
  });
});
