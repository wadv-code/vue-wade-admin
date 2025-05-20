async function initApplication() {
  // loading
  // startGlobalLoading();
  const namespace = 'wade-app';
  // 启动应用并挂载
  // vue应用主要逻辑及视图
  const { bootstrap } = await import('./bootstrap');
  await bootstrap(namespace);

  // 移除并销毁loading
  // unmountGlobalLoading();
}

initApplication();
