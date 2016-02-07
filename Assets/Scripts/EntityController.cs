using UnityEngine;
using System.Collections;

public class EntityController : MonoBehaviour {

  new Rigidbody rigidbody;
  CharacterController controller;

  public float speed = 5.0f;

  protected Vector3 velocity;

	// Use this for initialization
	void Start () {
    rigidbody = GetComponent<Rigidbody>();
    controller = GetComponent<CharacterController>();

    RaycastHit hitInfo;
    Physics.Raycast(transform.position, Vector3.down, out hitInfo);

    Vector3 newPosition = transform.position;
    Renderer renderer = GetComponent<Renderer>();
    if (renderer)
    {
      // TODO: Using renderer might not be perfect.
      newPosition.y -= renderer.bounds.min.y - hitInfo.point.y;
    }
    transform.position = newPosition;
	}
	
	// Update is called once per frame
	void Update () {

    update();

    if (controller != null && controller.enabled)
    {
      controller.Move(velocity * Time.deltaTime);
    }
    else
    if (rigidbody == null || rigidbody.isKinematic)
    {
      transform.Translate(velocity * Time.deltaTime);
    }
    else
    {
      rigidbody.AddForce( velocity );
    }
	}

  protected virtual void update()
  {
    
  }

  void OnTriggerEnter(Collider other)
  {
    Debug.Log("OnTriggerEnter:" + Time.time);

    //Debug.DrawRay(transform.position, Vector3.zero, Color.red);
  }
}
