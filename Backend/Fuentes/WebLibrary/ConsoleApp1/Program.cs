using System;

namespace ConsoleApp1
{
    //class Program
    //{
    //    static void Main(string[] args)
    //    {
    //        Console.WriteLine("Hello World!");
    //    }


    //}

    // public class A
    //{
    //    public virtual void Fun1(int i) { Console.WriteLine(i); }
    //    public void Fun2(A a) { a.Fun1(1); Fun1(5); }
    //}
    //public class B : A
    //{
    //    public override void Fun1(int i) { base.Fun1(i + 1); }
    //    public static void Main() { B b = new B(); A a = new A(); a.Fun2(b); b.Fun2(a); }
    //}
    //public class Csharp
    //{
    //    public void subject<S>(S arg)
    //    {
    //        Console.WriteLine(arg);
    //    }
    //}
    //class Program
    //{
    //    static void Main(string[] args)
    //    {
    //        Csharp c = new Csharp();
    //        c.subject("hi");
    //        c.subject(20);
    //    }
    //}
    // class Program
    // {
    //static void Main(string[] args)
    //{
    //    int i;
    //    int b = 8, a = 32;
    //    for (i = 0; i <= 10; i++)
    //    {
    //        if ((a / b * 2) == 2)
    //        {
    //            Console.WriteLine(i + " ");
    //            continue;
    //        }
    //        else if (i != 4)
    //            Console.Write(i + " ");
    //        else
    //            break;
    //    }
    //    Console.ReadLine();
    //}
    //static void Main(string[] args)

    //{

    //    int i;

    //    int b = 8, a = 32;

    //    for (i = 0; i <= 10; i++)

    //    {

    //        if ((a / b * 2) == 2)

    //        {

    //            Console.WriteLine(i + " ");

    //            continue;

    //        }

    //        else if (i != 4)

    //            Console.Write(i + " ");

    //        else

    //            break;

    //    }

    //    Console.ReadLine();

    //}
    // }

    //class Class1
    //{
    //    private string str = "Class1.str";
    //    private int i = 0;
    //    static void StringConvert(string str) { str = "string being converted."; }
    //    static void StringConvert(Class1 c) { c.str = "string being converted."; }
    //    static void Add(int i) { i++; }
    //    static void AddWithRef(ref int i) { i++; }
    //    static void Main()
    //    {
    //        int i1 = 10;
    //        int i2 = 20;
    //        string str = "str";
    //        Class1 c = new Class1();
    //        Add(i1);
    //        AddWithRef(ref i2);
    //        Add(c.i);
    //        StringConvert(str);
    //        StringConvert(c);
    //        Console.WriteLine(i1);
    //        Console.WriteLine(i2);
    //        Console.WriteLine(c.i);
    //        Console.WriteLine(str);
    //        Console.WriteLine(c.str);

    //        var query = from u in db.Users
    //                    join ur in db.UserRole on u.Id equals ur.UserId
    //                    from ur in urr.DefaultIfEmpty()
    //                    join r in db.Roles on ur.RoleId equals r.Id
    //                    where u.UserName == userName
    //                    select r.Role_Column;

    //        var query = from u in db.Users
    //                    join ur in db.UserRole on u.Id equals ur.UserId
    //                    join r in db.Roles on ur.RoleId equals r.Id into urr
    //                    from r in urr.DefaultIfEmpty()
    //                    where u.UserName == userName
    //                    select r.Role_Column;


    //    }
    //}
    class Program
    {
        static void Main(string[] args)

        {

            int i = 2, j = 3, k = 4;

            switch (i + j - k)

            {

                case 0:
                case 2:
                case 4:

                    ++i;

                    k += j;

                    break;

                case 1:
                case 3:
                case 5:

                    --i;

                    k -= j;

                    break;

                default:

                    i += j;

                    break;

            }

            Console.WriteLine(i + " " + j + " " + k);

            Console.ReadLine();

        }
    }
    //public abstract class A
    //{
    //    public A() { Console.WriteLine('A'); }
    //    public virtual void Fun() { Console.WriteLine("A.Fun()"); }
    //}

    //public class B : A
    //{
    //    public B() { Console.WriteLine('B'); }
    //    public new void Fun() { Console.WriteLine("B.Fun()"); }
    //    public static void Main() { A a = new B(); a.Fun(); }
    //}


}
