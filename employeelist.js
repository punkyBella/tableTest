/**
 * Created by Administrator on 2017/4/17.
 */
angular.module('mymodule', [])
    .controller('myCtrl', function ($scope) {
        //�����дӷ������˻�ȡ������
        $scope.list = [{
            ename: 'Tom1 Cruise',
            bio: "Tom1 from china and work in geeeTom1 from china and woTom1 from china and woTom1 from china and wo"
        },{
            ename: 'jerry Cruise',
            bio: "jerry is a man who works harderry is a man who works"
        },{
            ename: 'nina Cruise',
            bio: "nina 's bionina 's bionina 's bionina 's bio"
        },{
            ename: 'Tom4 Cruise',
            bio: "Tom4 is what kind of peopleTom4 is what kind of peopleTom4 is what kind of peopleTom4 is what kind of peopleTom4 is what kind of people"
        }];
        $scope.bioList="";

        $scope.bio=function(){
            $scope.bioList=this.employee.bio
        };
        $scope.bioalert=function(){
            alert(this.bioList)
        }

    })