void bottomView(Node* root)
{
  if (!root)
      return;
  map<int, int> m;
  queue<pair<Node*, int> > q;
  q.push({ root, 0 });
  while (!q.empty()) {
    pair<Node*, int> p = q.front();
    Node* curr = p.first;
    int hd = p.second;
    m[hd] = curr->data;
    q.pop();
    if (curr->left != NULL)
        q.push({ curr->left, hd - 1 });
    if (curr->right != NULL)
      q.push({ curr->right, hd + 1 });
  }
  for (auto i = m.begin(); i != m.end(); ++i)
    cout << i->second << " ";
}