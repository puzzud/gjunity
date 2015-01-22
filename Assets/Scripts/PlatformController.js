#pragma strict

function Start () {

}

function FixedUpdate () {
	var downDirection : Vector3 = new Vector3 (0,-1,0);	
	var newVec : Vector3 = new Vector3();
	
	if(Input.GetKey(KeyCode.UpArrow)){		
		newVec = this.rigidbody.position;
		newVec.z += -5;
		this.rigidbody.AddForceAtPosition(10*downDirection, newVec);
	} else if (Input.GetKey(KeyCode.DownArrow)){
		newVec = this.rigidbody.position;
		newVec.z += 5;
		this.rigidbody.AddForceAtPosition(10*downDirection, newVec);
	} else if (Input.GetKey(KeyCode.LeftArrow)){
		newVec = this.rigidbody.position;
		newVec.x += 5;
		this.rigidbody.AddForceAtPosition(10*downDirection, newVec);
	} else if (Input.GetKey(KeyCode.RightArrow)){
		newVec = this.rigidbody.position;
		newVec.x += -5;
		this.rigidbody.AddForceAtPosition(10*downDirection, newVec);
	}
}

function Update () {

	
}