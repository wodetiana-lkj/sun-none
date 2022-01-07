package main

import (
	"fmt"
)

func main() {
	cmd := parseCmd()
	if cmd.versionFlag {
		fmt.Println("version snapshot 0.0.1")
	} else if cmd.helpFlag || cmd.cp == "" {
		printUsage()
	} else {
		startJVM(cmd)
	}
}

func startJVM(cmd *Cmd) {
	fmt.Printf("class:%s,args:%v \r\n", cmd.class, cmd.args)
}
