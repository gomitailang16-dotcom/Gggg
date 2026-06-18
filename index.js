io.on('connection', (socket) => {
  console.log('ユーザーが接続しました: ' + socket.id);

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('change video', (videoId) => {
    console.log('動画が切り替わりました: ' + videoId);
    io.emit('change video', videoId);
  });

  // 【追加】ここから：Web画面からの停止命令を受け取る
  socket.on('kill server', () => {
    console.log('🔄 画面からの操作でサーバーを終了します...');
    process.exit(0); // これが Ctrl + C と全く同じ働きをします
  });
  // 【追加】ここまで

  socket.on('disconnect', () => {
    console.log('ユーザーが切断しました');
  });
});
