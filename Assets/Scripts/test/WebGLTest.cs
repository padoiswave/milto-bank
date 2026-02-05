using System.Runtime.InteropServices;
using UnityEngine;

public class WebGLTest : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void TestFromUnity();

    void Start()
    {
#if UNITY_WEBGL && !UNITY_EDITOR
        TestFromUnity();
#endif
    }
}