# CluSter
2023ss team09

每個人在撰寫一個新的 feature 時（例如投票）
應該要以 master 為 base branch 拉出另一個 branch
名稱我們假設是 feat/voting 的 branch
當他在 feat/voting 這個 branch 寫完功能後
再 merge 回 master branch
如果遇到 conflict 就要先 resolve 再 merge 進去

開始先創建以功能為名的branch
再clone:
git clone https....

切到你要寫的branch，記得一定要切再寫
git checkout <branch_name>
開始寫

每次寫code之前先創建以功能為名的branch(寫之前再創)
更新到本地端:
git pull(??待驗證

確認當前branch位子: 
git status

切到你要寫的branch，記得一定要切再寫:
git checkout <branch_name>

開始寫

寫完push到自己的branch然後pull request的時後需要一個別人同意才可以merge回master

寫功能時記得不要改多個資料夾如果有兩個人同時改動同個資料夾會造成conflict，要手動修正會很麻煩
然後遇到奇怪問題不要隨便覆蓋之類的
