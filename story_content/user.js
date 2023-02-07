function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5edZSw44oaw":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzUYuDfgkO99qpQnfYec-vuxg_UL7WmHiseS8FtL8O5MmuRf6I9WA_W4UefY4IHRk_6eA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

