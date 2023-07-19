int findDepth(string tree, int n)
{
    int level = 0, maxlevel = 0;
    for (int i = 0; i < n; ++i) {
        if (tree[i] == 'n') {
            ++level;
            maxlevel = max(maxlevel, level);
        } else
            --level;
    }
    return maxlevel;
}