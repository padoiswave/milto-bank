using System.Runtime.InteropServices;
using UnityEngine;

public class WebGLTest : MonoBehaviour
{
    void Start()
    {
        CallTest();
    }

#if UNITY_WEBGL && !UNITY_EDITOR
    [DllImport("__Internal")]
    private static extern void TestFromUnity();
#endif

    public void CallTest()
    {
#if UNITY_WEBGL && !UNITY_EDITOR
        TestFromUnity();
#else
        Debug.Log("WebGL 아님");
#endif
    }
}
