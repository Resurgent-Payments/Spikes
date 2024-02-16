
using System.CommandLine;
using System.CommandLine.Completions;
using System.CommandLine.Invocation;
using System.Linq;
using System.Text;
using System.Xml;

var rootCmd = new RootCommand("Parse xml files from Frannet");
rootCmd.SetHandler(() =>{
    var path = @"C:\Users\Richard\ResurgentPayments\leads\Franchizors.xml";
    var doc = new XmlDocument();
    doc.Load(path);

    var x = doc.GetElementsByTagName("div")
        .AsEnumerable()
        .Where(n => n.Attributes != null && n.Attributes["class"] != null && n.Attributes["class"].Value.Contains("df_ab_blurb_description"))
        .ToList();

    var sb = new StringBuilder();
    sb.AppendLine("Name,Industry,LiquidCapital,NetWorth,TotalInvestment,Financing,Training");

    foreach(var item in x) {
        sb.AppendLine(string.Format("\"{0}\",\"{1}\",\"{2}\",\"{3}\",\"{4}\",\"{5}\",\"{6}\"",
            item.ChildNodes[1].ChildNodes[1].Attributes["data-name"].Value,
            item.ChildNodes[0].ChildNodes[1].InnerText.Trim(),
            item.ChildNodes[0].ChildNodes[3].InnerText.Trim(),
            item.ChildNodes[0].ChildNodes[5].InnerText.Trim(),
            item.ChildNodes[0].ChildNodes[7].InnerText.Trim(),
            item.ChildNodes[0].ChildNodes[9].InnerText.Trim(),
            item.ChildNodes[0].ChildNodes[11].InnerText.Trim())
        );
    }
    Console.Write(sb.ToString());
});

return await rootCmd.InvokeAsync(args);


    public static class XmlNodeListExtensions
    {
        public static IEnumerable<System.Xml.XmlNode> AsEnumerable(this System.Xml.XmlNodeList nodelist)
        {
            foreach (System.Xml.XmlNode node in nodelist)
            {
                // foreach(var child in node.ChildNodes.AsEnumerable())
                // {
                //     yield return child;
                // }

                yield return node;
            }
        }
    }