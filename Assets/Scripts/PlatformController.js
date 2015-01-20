#pragma strict

var increment : float = 1;

function Start () {

}

function Update () {
	
	//Input.GetAxis("Horizontal");
	if(Input.GetKey(KeyCode.UpArrow)){
		transform.RotateAround(Vector3.forward, increment);
	} else if(Input.GetKey(KeyCode.DownArrow)){
		transform.RotateAround(Vector3.forward, -increment);
	} else if(Input.GetKey(KeyCode.LeftArrow)){
		transform.RotateAround(Vector3.left, increment);
	} else if(Input.GetKey(KeyCode.RightArrow)){
		transform.RotateAround(Vector3.left, -increment);
	}
	
	//Inpute 

}