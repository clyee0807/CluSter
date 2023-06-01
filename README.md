# CluSter
2023ss team09
## Brief
每個人在撰寫一個新的 feature 時（例如投票）
應該要以 master 為 base branch 拉出另一個 branch
名稱我們假設是 feat/voting 的 branch
當他在 feat/voting 這個 branch 寫完功能後
再 merge 回 master branch
如果遇到 conflict 就要先 resolve 再 merge 進去

### step.0
```
git clone ...
```
### step.1
1. 根據master複製一個new branch
```git branch <new_branch> <master>```
2. 切換到你創的那個new branch
```git checkout <branch_name>```
### step.2
1. 寫你的扣
2. push到你創的branch(不要推錯)
```git add .```
```git commit -m 'description'```
```git push -u <new_branch>```
### step.3
1. 合併到master
在github上面按pull request->ok

### 其他指令
* ```git branch -a``` 看現在有哪些branch
* ```git status``` 看現在有trace哪些file

### Notice
寫功能時記得不要改多個資料夾如果有兩個人同時改動同個資料夾會造成conflict，要手動修正會很麻煩
然後遇到奇怪問題不要隨便覆蓋之類的
