package com.visneweb.election.generated;

import java.io.IOException;
import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;
import java.util.concurrent.Future;

import org.web3j.abi.FunctionEncoder;
import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Type;
import org.web3j.abi.datatypes.Utf8String;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.protocol.exceptions.TransactionException;
import org.web3j.tx.Contract;
import org.web3j.tx.TransactionManager;

/**
 * Auto generated code.<br>
 * <strong>Do not modify!</strong><br>
 * Please use the <a href="https://docs.web3j.io/command_line.html">web3j command line tools</a>, or {@link org.web3j.codegen.SolidityFunctionWrapperGenerator} to update.
 *
 * <p>Generated with web3j version 2.3.0.
 */
public final class Greeter extends Contract {
    private static final String BINARY = "6060604052341561000f57600080fd5b6040516104233803806104238339810160405280805160008054600160a060020a03191633600160a060020a03161790559190910190506001818051610059929160200190610060565b50506100fb565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a157805160ff19168380011785556100ce565b828001600101855582156100ce579182015b828111156100ce5782518255916020019190600101906100b3565b506100da9291506100de565b5090565b6100f891905b808211156100da57600081556001016100e4565b90565b6103198061010a6000396000f300606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166341c0e1b581146100525780634ac0d66e14610067578063cfae3217146100b857600080fd5b341561005d57600080fd5b610065610142565b005b341561007257600080fd5b61006560046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061018395505050505050565b34156100c357600080fd5b6100cb61019a565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156101075780820151838201526020016100ef565b50505050905090810190601f1680156101345780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6000543373ffffffffffffffffffffffffffffffffffffffff908116911614156101815760005473ffffffffffffffffffffffffffffffffffffffff16ff5b565b6001818051610196929160200190610243565b5050565b6101a26102c1565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102385780601f1061020d57610100808354040283529160200191610238565b820191906000526020600020905b81548152906001019060200180831161021b57829003601f168201915b505050505090505b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061028457805160ff19168380011785556102b1565b828001600101855582156102b1579182015b828111156102b1578251825591602001919060010190610296565b506102bd9291506102d3565b5090565b60206040519081016040526000815290565b61024091905b808211156102bd57600081556001016102d95600a165627a7a7230582093f434eeb53d4bdfa1ff27c25ceaaf0e83dc64c2c1bef50a935890762bac60cb0029";

    private Greeter(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    private Greeter(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    public TransactionReceipt kill() throws IOException, TransactionException {
        Function function = new Function("kill", Arrays.<Type>asList(), Collections.<TypeReference<?>>emptyList());
        return executeTransaction(function);
    }

    public TransactionReceipt newGreeting(Utf8String _greeting) throws IOException, TransactionException {
        Function function = new Function("newGreeting", Arrays.<Type>asList(_greeting), Collections.<TypeReference<?>>emptyList());
        return executeTransaction(function);
    }

    public Greeter greet() throws IOException {
        Function function = new Function("greet", 
                Arrays.<Type>asList(), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Utf8String>() {}));
        return executeCallSingleValueReturn(function);
    }

    public static Greeter deploy(Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit, BigInteger initialWeiValue, Utf8String _greeting) throws IOException, TransactionException {
        String encodedConstructor = FunctionEncoder.encodeConstructor(Arrays.<Type>asList(_greeting));
        return deploy(Greeter.class, web3j, credentials, gasPrice, gasLimit, BINARY, encodedConstructor, initialWeiValue);
    }

    public static Greeter deploy(Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit, BigInteger initialWeiValue, Utf8String _greeting) throws IOException, TransactionException {
        String encodedConstructor = FunctionEncoder.encodeConstructor(Arrays.<Type>asList(_greeting));
        return deploy(Greeter.class, web3j, transactionManager, gasPrice, gasLimit, BINARY, encodedConstructor, initialWeiValue);
    }

    public static Greeter load(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return new Greeter(contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    public static Greeter load(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return new Greeter(contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

	public char[] getValue() {
		// TODO Auto-generated method stub
		return null;
	}
}
