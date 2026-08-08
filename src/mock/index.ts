import Mock from 'mockjs';

import './user';
import './message-box';

import '@/views/dashboard/workplace/mock';

import '@/views/list/card/mock';
import '@/views/list/search-table/mock';

import '@/views/form/step/mock';
import '@/views/form/group/mock';

import '@/views/profile/basic/mock';

import '@/views/user/info/mock';

import '@/views/form/tiptap/mock';

Mock.setup({
  timeout: '600-1000',
});
