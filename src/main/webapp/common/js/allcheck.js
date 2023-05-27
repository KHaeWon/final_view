function allCheck(e) {
      if(e.target.checked) {
        document.querySelectorAll(".check_all_list").forEach(function(v, i) {
          v.checked = true;
        });
      } else {
        document.querySelectorAll(".check_all_list").forEach(function(v, i) {
          v.checked = false;
        });
      }
    }
    function checkAllList(e) {
      let checkCount = 0;
      document.querySelectorAll(".check_all_list").forEach(function(v, i) {
        if(v.checked === false){
          checkCount++;
        }
      });

      if(checkCount>0) {
        document.getElementById("allCheck").checked = false;
      } else if(checkCount === 0) {
        document.getElementById("allCheck").checked = true;
      }
    }