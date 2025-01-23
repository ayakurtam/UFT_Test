Systemutil.Run "C:\Program Files (x86)\OpenText\UFT One\samples\Flights Application\FlightsGUI.exe"
WpfWindow("OpenText MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_2076443704_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfEdit("password").SetSecure "6788db7c444351107ea0" @@ hightlight id_;_2080439288_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2087211248_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfComboBox("fromCity").Select "Paris" @@ hightlight id_;_2087210624_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfComboBox("toCity").Select "London" @@ hightlight id_;_2077767440_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfComboBox("Class").Select "Business" @@ hightlight id_;_2074214032_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_2088718760_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2076445432_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,2 @@ hightlight id_;_2042663536_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2085847640_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfEdit("passengerName").Set "aya" @@ hightlight id_;_2085847352_;_script infofile_;_ZIP::ssf16.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_2076408440_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("OpenText MyFlight Sample").Close @@ hightlight id_;_1771936_;_script infofile_;_ZIP::ssf18.xml_;_
