package main

import (
	"flag"
	"fmt"
	"os"
)

/**
classpath	路径
class		类名
args		设置的参数
*/
type Cmd struct {
	versionFlag bool
	helpFlag    bool
	cp          string
	class       string
	args        []string
}

func parseCmd() *Cmd {
	cmd := &Cmd{}
	fmt.Println("create cmd")
	flag.Usage = printUsage

	flag.BoolVar(&cmd.helpFlag, "?", false, "this is help usage")
	flag.BoolVar(&cmd.helpFlag, "help", false, "this is help usage")
	flag.BoolVar(&cmd.versionFlag, "version", false, "print version messag and exit")
	flag.StringVar(&cmd.cp, "classpath", "", "classpath place is there")
	flag.Parse()

	args := flag.Args()
	if len(args) > 0 {
		cmd.class = args[0]
		cmd.args = args[1:]
	}
	fmt.Println(cmd)
	return cmd

}

//打印正确的输出格式
func printUsage() {
	fmt.Printf("Usage: %s [-options] class [args...]\n", os.Args[0])
}
